from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Product, SiteReview, Rating
from django.db.models import Avg

class ProductSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    average_rating = serializers.SerializerMethodField()
    total_reviews = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'

    def get_image(self, obj):
        if not obj.image:
            return None
        
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.image.url)
        
        # Fallback for contexts without a request (e.g., shell)
        return obj.image.url

    def get_average_rating(self, obj):
        return obj.ratings.aggregate(Avg('score'))['score__avg'] or 0

    def get_total_reviews(self, obj):
        return obj.ratings.count()

class UserSerializerWithToken(serializers.ModelSerializer):
    isAdmin = serializers.SerializerMethodField(read_only=True)
    name = serializers.SerializerMethodField(read_only=True)
    access = serializers.SerializerMethodField(read_only=True)
    refresh = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin', 'access', 'refresh']

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        # Returns first_name if available, otherwise username
        return obj.first_name if obj.first_name else obj.username

    def get_access(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
    
    def get_refresh(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token)

class SiteReviewSerializer(serializers.ModelSerializer):
    user_name = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = SiteReview
        fields = ['id', 'user_name', 'stars', 'comment', 'created_at']

    def get_user_name(self, obj):
        return obj.user.first_name if obj.user.first_name else obj.user.username
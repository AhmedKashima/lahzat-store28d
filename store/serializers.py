# # from rest_framework import serializers
# # from .models import Product
# # from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# # # 1. This handles the Watches (Products)
# # class ProductSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = Product
# #         fields = '__all__'

# # # 2. This handles the Login (checks if you are Admin)
# # class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
# #     def validate(self, attrs):
# #         data = super().validate(attrs)
        
# #         # Add extra data to the response so React knows if this is the Owner
# #         data['username'] = self.user.username
# #         data['email'] = self.user.email
# #         data['isAdmin'] = self.user.is_staff 
        
# #         return data


# from rest_framework import serializers
# from django.contrib.auth.models import User
# from rest_framework_simplejwt.tokens import RefreshToken
# from .models import Product

# # 1. Product Serializer
# class ProductSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = '__all__'

# # 2. User/Login Serializer
# class UserSerializerWithToken(serializers.ModelSerializer):
#     isAdmin = serializers.SerializerMethodField(read_only=True)
#     access = serializers.SerializerMethodField(read_only=True)
#     refresh = serializers.SerializerMethodField(read_only=True)

#     class Meta:
#         model = User
#         fields = ['id', 'username', 'email', 'isAdmin', 'access', 'refresh']

#     def get_isAdmin(self, obj):
#         return obj.is_staff

#     def get_access(self, obj):
#         token = RefreshToken.for_user(obj)
#         return str(token.access_token)
    
#     def get_refresh(self, obj):
#         token = RefreshToken.for_user(obj)
#         return str(token)
    
# class ProductSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = '__all__' # This automatically picks up the new fields


from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Product, SiteReview

# 1. Product Serializer
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

# 2. User Serializer (With Name & Token)
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
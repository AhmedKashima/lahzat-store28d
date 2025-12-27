# from django.contrib import admin
# from .models import Product, Rating # + Import Rating

# class ProductAdmin(admin.ModelAdmin):
#     list_display = ('name', 'price', 'is_active', 'created_at')
#     search_fields = ('name',)
#     list_filter = ('is_active',)

# # + Add this class for Ratings
# class RatingAdmin(admin.ModelAdmin):
#     list_display = ('user', 'product', 'score', 'created_at')
#     list_filter = ('score', 'product')
#     search_fields = ('comment', 'user__username')

# admin.site.register(Product, ProductAdmin)
# admin.site.register(Rating, RatingAdmin) # + Register it here

from django.contrib import admin
from .models import Product, Rating, SiteReview # Import SiteReview

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'category', 'is_active', 'is_bestseller')
    search_fields = ('name',)
    list_filter = ('category', 'is_active', 'is_bestseller')

class RatingAdmin(admin.ModelAdmin):
    list_display = ('user', 'product', 'score', 'created_at')

# New: Review Admin
class SiteReviewAdmin(admin.ModelAdmin):
    list_display = ('user', 'stars', 'created_at')
    list_filter = ('stars',)
    search_fields = ('comment', 'user__username')

admin.site.register(Product, ProductAdmin)
admin.site.register(Rating, RatingAdmin)
admin.site.register(SiteReview, SiteReviewAdmin) # Register here
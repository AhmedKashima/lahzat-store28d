# from django.db import models
# from django.contrib.auth.models import User

# # 1. Product must be defined FIRST
# class Product(models.Model):
#     name = models.CharField(max_length=200, verbose_name="اسم الساعة")
#     description = models.TextField(verbose_name="وصف الساعة")
#     price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="السعر (ريال)")
#     image = models.ImageField(upload_to='products/', blank=True, null=True, verbose_name="صورة الساعة")
#     is_active = models.BooleanField(default=True, verbose_name="متاح للبيع؟")
#     created_at = models.DateTimeField(auto_now_add=True, verbose_name="تاريخ الإضافة")

#     def __str__(self):
#         return self.name

#     class Meta:
#         verbose_name = "ساعة"
#         verbose_name_plural = "الساعات"

# # 2. Rating is defined SECOND (because it links to Product)
# class Rating(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='ratings', verbose_name="الساعة")
#     user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="المستخدم")
#     score = models.IntegerField(default=5, verbose_name="التقييم (من 5)")
#     comment = models.TextField(verbose_name="التعليق", blank=True, null=True)
#     created_at = models.DateTimeField(auto_now_add=True, verbose_name="تاريخ التقييم")

#     def __str__(self):
#         return f"{self.user.username} - {self.product.name}"

#     class Meta:
#         verbose_name = "تقييم"
#         verbose_name_plural = "التقييمات"


from django.db import models
from django.contrib.auth.models import User

# Define the 7 Categories here
CATEGORY_CHOICES = (
    ('men_watches', 'ساعات رجالي'),
    ('women_watches', 'ساعات نسائي'),
    ('rings', 'الخواتم العقيق'),
    ('perfumes', 'العطور'),
    ('accessories', 'الاكسسوارات'),
    ('gifts', 'تحف وهدايا'),
    ('glasses', 'نظارات'),
)

class Product(models.Model):
    name = models.CharField(max_length=200, verbose_name="اسم المنتج")
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='men_watches', verbose_name="القسم")
    description = models.TextField(verbose_name="وصف المنتج")
    
    # --- NEW FIELDS ---
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="السعر الحالي (ريال)")
    old_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True, verbose_name="السعر قبل الخصم (اختياري)")
    is_bestseller = models.BooleanField(default=False, verbose_name="هل هو الأكثر مبيعاً؟")
    # ------------------

    image = models.ImageField(upload_to='products/', blank=True, null=True, verbose_name="صورة المنتج")
    is_active = models.BooleanField(default=True, verbose_name="متاح للبيع؟")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="تاريخ الإضافة")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "منتج"
        verbose_name_plural = "المنتجات"

# ... keep Rating class ...
class Rating(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='ratings', verbose_name="المنتج")
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="المستخدم")
    score = models.IntegerField(default=5, verbose_name="التقييم (من 5)")
    comment = models.TextField(verbose_name="التعليق", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="تاريخ التقييم")

    def __str__(self):
        return f"{self.user.username} - {self.product.name}"

    class Meta:
        verbose_name = "تقييم"
        verbose_name_plural = "التقييمات"


        # ... keep imports and CATEGORY_CHOICES ...


# ... (Previous code)

# 3. Store/Service Reviews
class SiteReview(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="المستخدم")
    stars = models.IntegerField(default=5, verbose_name="النجوم")
    comment = models.TextField(verbose_name="التعليق")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.stars} Stars"

    class Meta:
        verbose_name = "تقييم المتجر"
        verbose_name_plural = "تقييمات المتجر"
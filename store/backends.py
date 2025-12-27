# from django.contrib.auth.backends import ModelBackend
# from django.contrib.auth import get_user_model

# class EmailBackend(ModelBackend):
#     def authenticate(self, request, username=None, password=None, **kwargs):
#         UserModel = get_user_model()
#         try:
#             # Try to find a user with this Email
#             user = UserModel.objects.get(email=username)
#         except UserModel.DoesNotExist:
#             # No user with this email found
#             return None
#         except UserModel.MultipleObjectsReturned:
#             # SAFETY: If two users have the same email, pick the first one to prevent crash
#             user = UserModel.objects.filter(email=username).order_by('id').first()
        
#         # Check if password is correct
#         if user and user.check_password(password):
#             return user
#         return None

from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model

class EmailBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        UserModel = get_user_model()
        try:
            # 1. Try to find the user by EMAIL
            # We use 'username' variable because Django passes the input as 'username' by default
            user = UserModel.objects.get(email=username)
        except UserModel.DoesNotExist:
            return None
        except UserModel.MultipleObjectsReturned:
            # If duplicates exist, take the first one
            user = UserModel.objects.filter(email=username).order_by('id').first()

        # 2. Check the password
        if user and user.check_password(password):
            return user
        
        return None
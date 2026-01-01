"""
URL configuration for backend project.
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to Lahzat Store API!")

urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
    path('api/', include('store.urls')),
]

# --- Development-only Media Serving ---
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

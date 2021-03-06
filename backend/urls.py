from django.contrib import admin
from django.urls import path, include

from backend.users.urls import url_patterns as USER_URLS

urlpatterns = [
    path('admin/', admin.site.urls),
    path('v1/', include([
        USER_URLS,
    ]))
]

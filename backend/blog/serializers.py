from rest_framework import serializers
from .models import BlogPost


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        # fields = ['url', 'username', 'email', 'is_staff']
        fields = '__all__'
        lookup_field = 'slug'

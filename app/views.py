from django.shortcuts import render,get_object_or_404
from .models import Contact


def index(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        sent=Contact.objects.create(name=name, email=email, subject=subject, message=message)
        sent.save()
        
        
    return render(request,'app/index.html')
from django.shortcuts import render


def index(request):
    # return render(request, 'frontend/index.html')
    return render(request, 'frontend/base.html')

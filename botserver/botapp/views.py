from django.shortcuts import render
from django.http import JsonResponse
from .models import ButtonCall
from .models import ButtonCall


def index(request):
    users = ButtonCall.objects.all()
    return render(request, 'index.html',{'users': users})


def start_bot(request):
    
    print(request )
    if request.method == 'POST':
        name = request.POST.get('name')
        button = request.POST.get('button')
        print(request)
        # Store the user's name
        request.session['name'] = name

        # Increment the button call count and store it
        button_call, _ = ButtonCall.objects.get_or_create(name=name, button=button)
        button_call.count += 1
        button_call.save()

        return JsonResponse({'status': 'success'})
    else:
        return JsonResponse({'status': 'error'})

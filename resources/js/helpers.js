export default { 
       showToast:async function(title,icon = 'success',time = 900){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: time,timerProgressBar: true,
            didOpen: (toast) => { 
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)}})
            Toast.fire({icon,title})
      },
      showErrors:async function(title,icon = 'error',time = 5000){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: time,timerProgressBar: true,
            didOpen: (toast) => { 
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)}})
            Toast.fire({icon,title})
      },
      showErrorsPopup:async function (text,icon='error',title='processes filed',footer=''){
        Swal.fire({icon,title,text,footer})
      },
      showPopup:async function (title,icon='success',text='processes has been complete success',footer=''){
        Swal.fire({icon,title,text,footer})
      },

  }
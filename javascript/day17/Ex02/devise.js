/*document.querySelector('button').onclick = changeDevise
    document.querySelector('button').onclick = function() {
      changeDevise('test')
    }*/

      document.querySelector('button').addEventListener('click', changeDevise)

      function changeDevise() {
        //let euros = Parse(document.querySelector('#euros').value) or 
        //let euros = Number(document.querySelector('#euros').value)
        let euros = parseFloat(document.querySelector('#euros').value)
        if(!euros || euros < 0)
        {
          alert("Enter a positive number please")
          return;
        }
        let dollars = " $ " + euros * 2
        document.querySelector('output').value = dollars
        document.querySelector('#euros').addEventListener('focus', cleanner)
  
        function cleanner() {
          document.querySelector('#euros').value = ''
          document.querySelector('output').value = ''
        }
      }
  
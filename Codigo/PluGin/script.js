function obtenerUsuario() {
    let userName = document.getElementById("actionmenuaction-1").innerHTML;
    return userName;
  }
console.log(obtenerUsuario());

function saveUserName(userName) {
  chrome.storage.local.set({ userName: userName }, function() {
    console.log('Nombre de usuario guardado:', userName);
  });
}

saveUserName(obtenerUsuario());

// Función para obtener el userName desde chrome.storage
function getUserName() {
  chrome.storage.local.get('userName', function(result) {
    if (result.userName) {
      console.log('Nombre de usuario recuperado:', result.userName);
      // Aquí puedes usar el valor de userName según lo necesites
    } else {
      console.log('No se ha encontrado el nombre de usuario.');
    }
  });
}

// Llamar a la función para recuperar el nombre de usuario
getUserName();

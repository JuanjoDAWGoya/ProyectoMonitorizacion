function obtenerUsuario() {
    let userName = document.getElementById("actionmenuaction-1").innerHTML;
    return userName;
  }
  function obtenerIdentificador() {
    let usernameElement = document.querySelector('.text-username');
    if (usernameElement) {
      return usernameElement.getAttribute('href');
    } else {
      console.error("No se encontró el elemento con la clase 'text-username'");
      return null;
    }
  }

console.log(obtenerUsuario());
console.log(obtenerIdentificador());

function saveUserName(userName) {
  chrome.storage.local.set({ userName: userName }, function() {
    console.log('Nombre de usuario guardado:', userName);
  });
}

function saveID(ID) {
  chrome.storage.local.set({ ID: ID }, function() {
    console.log('ID de usuario guardado:', ID);
  });
}

saveUserName(obtenerUsuario());
saveID(obtenerIdentificador());

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
function getID() {
  chrome.storage.local.get('ID', function(result) {
    if (result.ID) {
      console.log('ID de usuario recuperado:', result.ID);
      // Aquí puedes usar el valor de userName según lo necesites
    } else {
      console.log('No se ha encontrado la ID.');
    }
  });
}

// Llamar a la función para recuperar el nombre de usuario
getUserName();
getID();

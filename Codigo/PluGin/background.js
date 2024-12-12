// background.js

// Escuchar cuando se carga una nueva página
chrome.webNavigation.onCompleted.addListener(function (details) {
    const url = details.url;
    console.log("Página visitada:", url);
  
    // Recuperamos el userName y el historial de URLs desde chrome.storage
    chrome.storage.local.get(['userName', 'visitedUrls'], function(result) {
      const userName = result.userName || "Desconocido";  // Si no hay userName, se usa "Desconocido"
      const visitedUrls = result.visitedUrls || [];
  
      // Agregamos la URL visitada al historial junto con el userName
      visitedUrls.push({
        url: url,
        user: userName,
        timestamp: new Date().toISOString()
      });
  
      // Guardamos el historial de URLs actualizado
      chrome.storage.local.set({ visitedUrls: visitedUrls }, function() {
        console.log("URL registrada correctamente con el nombre de usuario.");
      });
    });
  }, {});

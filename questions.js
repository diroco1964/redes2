// Preguntas y opciones copiadas del examen original (mismo orden de opciones). Solo se mezcla el orden de las preguntas.
// Formato: { q, options: [...], answer: índice correcto (desde 0), explanation }
const QUIZ_TITLE = "Programación sobre Redes — Parcial 2";

const QUESTIONS = [
  {
    "q": "¿Cuál de las siguientes es una propiedad deseable en un algoritmo de hash?",
    "options": [
      "Efecto avalancha",
      "Reversibilidad",
      "Dependencia de la plataforma",
      "Compresión con pérdida"
    ],
    "answer": 0,
    "explanation": "Un cambio mínimo en la entrada produce una salida completamente distinta. La reversibilidad es justo lo contrario de lo que se busca (un hash es unidireccional)."
  },
  {
    "q": "¿Qué atributo de cookies evita que JavaScript pueda acceder a su contenido?",
    "options": [
      "Path",
      "HttpOnly",
      "Secure",
      "SameSite"
    ],
    "answer": 1,
    "explanation": "HttpOnly impide que JavaScript lea la cookie, lo que protege contra el robo de cookies vía XSS. Secure fuerza HTTPS, SameSite mitiga CSRF y Path limita la ruta."
  },
  {
    "q": "¿Cuál de estas es una buena práctica al trabajar con streams en .NET?",
    "options": [
      "Utilizar using para asegurar liberación de recursos",
      "Evitar el uso de buffers",
      "No cerrar los streams automáticamente",
      "Usar estructuras anidadas"
    ],
    "answer": 0,
    "explanation": "Los streams implementan IDisposable; using garantiza que se llame a Dispose() y se liberen los recursos aunque haya una excepción."
  },
  {
    "q": "¿Qué técnica protege contra modificaciones maliciosas de scripts importados?",
    "options": [
      "Comprobaciones de integridad de subrecursos (SRI)",
      "Hash salting",
      "SSL",
      "Redirección 301"
    ],
    "answer": 0,
    "explanation": "SRI agrega un atributo integrity con el hash esperado del script; si el contenido fue alterado (MITM o CDN comprometido), el hash no coincide y el navegador no lo ejecuta."
  },
  {
    "q": "¿Cuál es una ventaja de ABAC sobre RBAC?",
    "options": [
      "Menor carga de cómputo",
      "Mayor granularidad en permisos",
      "Requiere menos reglas",
      "Uso exclusivo en frontend"
    ],
    "answer": 1,
    "explanation": "ABAC decide el acceso evaluando atributos del usuario, el recurso y el contexto, lo que permite reglas más finas que RBAC, que asigna permisos solo por rol."
  },
  {
    "q": "¿Cuál de los siguientes NO es un método de protección contra CSRF?",
    "options": [
      "Usar el atributo SameSite",
      "Evitar solicitudes GET con efectos secundarios",
      "Usar tokens anti-CSRF",
      "Validar el encabezado User-Agent"
    ],
    "answer": 3,
    "explanation": "El User-Agent se falsifica trivialmente y no aporta ninguna garantía de origen, por eso NO es un método de protección."
  },
  {
    "q": "¿Qué ventaja principal ofrece el patrón Producer-Consumer?",
    "options": [
      "Acopla productor y consumidor",
      "Reduce la cantidad de hilos",
      "Permite que producción y consumo ocurran a distintos ritmos",
      "Requiere una única cola de mensajes"
    ],
    "answer": 2,
    "explanation": "Productor y consumidor se comunican a través de una cola intermedia que los desacopla, y cada uno trabaja a su propia velocidad sin bloquearse mutuamente."
  },
  {
    "q": "¿Qué se recomienda para evitar ataques de degradación como POODLE?",
    "options": [
      "Forzar el uso de una versión mínima segura de TLS",
      "Deshabilitar HTTPS",
      "Eliminar cookies automáticamente",
      "Usar certificados autofirmados"
    ],
    "answer": 0,
    "explanation": "Los ataques de degradación empujan a negociar una versión o algoritmo más débil. La mitigación es aceptar solo una versión mínimamente segura de TLS (hoy TLS 1.3 para datos sensibles)."
  },
  {
    "q": "¿Cuál de las siguientes no es una tarea permitida al JavaScript en el navegador debido al sandboxing?",
    "options": [
      "Almacenar datos en localStorage",
      "Leer un archivo que el usuario seleccionó",
      "Ejecutar funciones del DOM",
      "Leer archivos arbitrarios del disco sin permiso"
    ],
    "answer": 3,
    "explanation": "El sandbox le impide acceder a archivos arbitrarios del disco, leer memoria arbitraria del SO o hacer llamadas de red arbitrarias."
  },
  {
    "q": "¿Cuál de los siguientes errores puede ocurrir al intentar escribir más datos en un buffer del que puede almacenar?",
    "options": [
      "Null Terminator",
      "Buffer Underflow",
      "Use After Free",
      "Buffer Overflow"
    ],
    "answer": 3,
    "explanation": "Escribir más datos de los que el buffer puede contener produce un desbordamiento de buffer, que puede sobrescribir memoria adyacente y derivar en fallas o ejecución de código."
  },
  {
    "q": "¿Cuál de las siguientes clases en .NET proporciona una abstracción genérica para trabajar con secuencias de bytes?",
    "options": [
      "NetworkBuffer",
      "Stream",
      "FileReader",
      "ByteStream"
    ],
    "answer": 1,
    "explanation": "Stream es la clase base abstracta de .NET para secuencias de bytes; de ella derivan FileStream, MemoryStream, NetworkStream, etc."
  },
  {
    "q": "¿Qué hace el encabezado HTTP Strict-Transport-Security?",
    "options": [
      "Fuerza el uso de HTTPS",
      "Bloquea ataques XSS",
      "Restringe los tamaños de las cookies",
      "Valida el contenido del formulario"
    ],
    "answer": 0,
    "explanation": "HSTS le indica al navegador que establezca únicamente conexiones seguras con el sitio durante el período definido en max-age, actualizando automáticamente a HTTPS."
  },
  {
    "q": "¿Cuál es un riesgo concreto si un atacante roba la clave privada del certificado del servidor web?",
    "options": [
      "Puede desencriptar el tráfico HTTPS del servidor",
      "Puede ejecutar código en el navegador sin restricciones",
      "Puede alterar registros DNS",
      "Solo puede ver cookies"
    ],
    "answer": 0,
    "explanation": "El servidor usa la clave privada emparejada con su certificado para descifrar el tráfico HTTPS. Si un atacante la roba, puede descifrar (y potencialmente suplantar) ese tráfico."
  },
  {
    "q": "¿Cuál de estas técnicas es parte del cifrado en tránsito?",
    "options": [
      "SHA-256",
      "Base64",
      "VPN",
      "TLS (Transport Layer Security)"
    ],
    "answer": 3,
    "explanation": "El cifrado en tránsito se implementa mediante TLS. SHA-256 es una función de hash y Base64 es solo codificación (no cifra)."
  },
  {
    "q": "¿Cuál de las siguientes medidas ayuda a mitigar ataques de clickjacking?",
    "options": [
      "Permitir iframes de cualquier dominio",
      "Usar solicitudes GET",
      "Incluir archivos JavaScript de dominios externos",
      "Configurar Content-Security-Policy: frame-ancestors 'none'"
    ],
    "answer": 3,
    "explanation": "Para evitar que el sitio sea embebido en un iframe malicioso se usa CSP con frame-ancestors (none o self), que le dice al navegador que no permita que otros sitios lo enmarquen."
  },
  {
    "q": "¿Qué significa que una cookie sea Secure?",
    "options": [
      "Que solo se transmite por HTTPS",
      "Que solo puede leerla JavaScript",
      "Que está cifrada con AES",
      "Que tiene doble factor"
    ],
    "answer": 0,
    "explanation": "Secure le indica al navegador que envíe la cookie únicamente en solicitudes HTTPS, impidiendo que viaje en claro por una conexión HTTP interceptable."
  },
  {
    "q": "¿Cuál es una causa común de vulnerabilidad por enumerción de usuarios?",
    "options": [
      "Mensajes de error diferentes en fallas de inicio de sesión",
      "Implementar MFA",
      "Uso de RBAC",
      "Uso de cookies HttpOnly"
    ],
    "answer": 0,
    "explanation": "Si el sistema responde distinto según exista o no el usuario ('usuario inexistente' vs 'contraseña incorrecta'), un atacante puede enumerar cuentas válidas. La defensa es un mensaje genérico idéntico."
  },
  {
    "q": "¿Cuál es el objetivo de la técnica de \"salting\" al almacenar contraseñas?",
    "options": [
      "Aumentar la velocidad del hashing",
      "Encriptar los datos en tránsito",
      "Reducir el tamaño de los hashes",
      "Generar hashes únicos para contraseñas iguales"
    ],
    "answer": 3,
    "explanation": "El salt es un valor aleatorio único agregado a cada contraseña antes del hash, de modo que dos contraseñas idénticas produzcan hashes distintos. Frustra rainbow tables y diccionarios precomputados."
  },
  {
    "q": "¿Qué técnica ayuda a evitar ataques de fuerza bruta penalizando errores repetidos?",
    "options": [
      "Limitación de velocidad",
      "OpenID",
      "Enumeración de usuarios",
      "MFA"
    ],
    "answer": 0,
    "explanation": "El rate limiting restringe la cantidad de intentos por unidad de tiempo, encareciendo la fuerza bruta. MFA agrega un factor extra pero no penaliza los errores repetidos."
  },
  {
    "q": "¿Qué patrón es más apropiado para un sistema que debe notificar a múltiples componentes sobre un evento?",
    "options": [
      "Singleton",
      "Pipes and Filters",
      "Producer-Consumer",
      "Publish-Subscribe"
    ],
    "answer": 3,
    "explanation": "Publish-Subscribe permite que un emisor publique un evento y que todos los componentes suscriptos sean notificados, desacoplando al emisor de los receptores."
  },
  {
    "q": "¿Qué debe hacer una aplicación para evitar ataques de sincronización durante el login?",
    "options": [
      "No usar cookies",
      "Aplicar hash a la contraseña aunque el usuario no exista",
      "Usar mensajes de error diferentes",
      "Implementar ABAC"
    ],
    "answer": 1,
    "explanation": "En un timing attack el atacante mide el tiempo de respuesta: si es notablemente más rápida cuando el usuario no existe (no se calcula el hash), se filtra la existencia de la cuenta. Calcular siempre el hash iguala los tiempos."
  },
  {
    "q": "¿Cuál de los siguientes ataques apunta a sobrecargar el sistema con solicitudes simultáneas desde muchos equipos?",
    "options": [
      "DDoS",
      "DoS",
      "XSS",
      "SQL Injection"
    ],
    "answer": 0,
    "explanation": "El DDoS usa miles de equipos (botnet) enviando solicitudes en simultáneo desde distintas IP, lo que dificulta bloquearlo por origen. El DoS clásico proviene de un único equipo."
  },
  {
    "q": "¿Qué atributo de cookie ayuda a proteger contra ataques CSRF (Cross-site Request Forgery)?",
    "options": [
      "SameSite",
      "HttpOnly",
      "Max-Age",
      "Secure"
    ],
    "answer": 0,
    "explanation": "SameSite le indica al navegador que no adjunte la cookie en solicitudes originadas desde otros sitios, cerrando el vector principal de CSRF."
  },
  {
    "q": "¿Cuál es la principal ventaja de usar sesiones del lado del cliente?",
    "options": [
      "Mayor seguridad",
      "Menor necesidad de autenticación",
      "Mejor escalabilidad",
      "No requiere cookies"
    ],
    "answer": 2,
    "explanation": "Al guardar el estado de sesión en el cliente (por ejemplo, en un JWT firmado), el servidor no necesita almacenar ni consultar sesiones, lo que facilita escalar horizontalmente sin estado compartido."
  },
  {
    "q": "¿Cuál es una recomendación de OWASP respecto al control de acceso?",
    "options": [
      "Permitir el acceso si no hay reglas",
      "Denegar el acceso por defecto",
      "Implementar controles solo del lado cliente",
      "Usar roles públicos siempre que sea posible"
    ],
    "answer": 1,
    "explanation": "OWASP recomienda 'deny by default': salvo los recursos públicos, todo acceso debe negarse a menos que exista una regla explícita que lo permita."
  },
  {
    "q": "¿Qué política restringe la ejecución de JavaScript sólo desde orígenes autorizados?",
    "options": [
      "Política de firewall",
      "Política de seguridad de contenido (CSP)",
      "Política de mismo origen",
      "Política de autenticación cruzada"
    ],
    "answer": 1,
    "explanation": "CSP permite declarar desde qué orígenes se pueden cargar y ejecutar recursos como scripts. La política de mismo origen regula la interacción entre orígenes, no desde dónde se carga el script."
  },
  {
    "q": "¿Cuál es la técnica que permite que un atacante simule una respuesta de DNS y redirija el tráfico?",
    "options": [
      "DNSSEC",
      "Envenenamiento de DNS",
      "Cache poisoning",
      "Subdomain hijacking"
    ],
    "answer": 1,
    "explanation": "El envenenamiento de DNS (DNS poisoning / spoofing) consiste en falsificar respuestas DNS para redirigir el tráfico hacia un servidor controlado por el atacante."
  },
  {
    "q": "¿Qué componente es vulnerable en un ataque MITM (man-in-the-middle)?",
    "options": [
      "El sistema de archivos del cliente",
      "El código fuente del navegador",
      "El sistema DNS del navegador",
      "El tráfico entre el cliente y el servidor"
    ],
    "answer": 3,
    "explanation": "En un MITM el atacante se ubica entre las dos partes e intercepta los mensajes en tránsito; lo vulnerable es el canal de comunicación entre cliente y servidor."
  },
  {
    "q": "¿Qué patrón permite que múltiples receptores reciban el mismo mensaje sin que el emisor los conozca?",
    "options": [
      "Publish-Subscribe",
      "Observer",
      "Singleton",
      "Adapter"
    ],
    "answer": 0,
    "explanation": "En Publish-Subscribe el publicador envía al canal/broker y no conoce a los suscriptores, que están totalmente desacoplados. En Observer el sujeto mantiene la lista de observadores, es decir, los conoce."
  },
  {
    "q": "¿Qué función cumple un token JWT en una sesión del lado del cliente?",
    "options": [
      "Identificar al usuario sin consultar el servidor de base de datos",
      "Verificar la IP del usuario",
      "Generar contraseñas seguras",
      "Almacenar credenciales cifradas"
    ],
    "answer": 0,
    "explanation": "El JWT lleva los datos del usuario firmados; el servidor valida la firma y confía en el contenido sin necesidad de ir a la base de datos a buscar la sesión."
  },
  {
    "q": "¿Cuál es el principal propósito de un token anti-CSRF?",
    "options": [
      "Evitar la inyección de SQL",
      "Validar usuarios con múltiples factores",
      "Reforzar la política de cookies",
      "Garantizar que el formulario se envíe desde el sitio legítimo"
    ],
    "answer": 3,
    "explanation": "Es un valor aleatorio incrustado en el formulario que el servidor verifica; como un sitio de otro dominio no puede conocerlo, garantiza que el envío se originó en el sitio legítimo."
  },
  {
    "q": "¿Cuál es la función principal del protocolo DNSSEC?",
    "options": [
      "Asegurar cookies entre subdominios",
      "Cifrar todas las conexiones HTTP",
      "Redirigir el tráfico a servidores secundarios",
      "Validar digitalmente las respuestas DNS"
    ],
    "answer": 3,
    "explanation": "DNSSEC permite que los servidores DNS firmen digitalmente sus respuestas, de modo que el cliente valide su autenticidad e integridad y se prevenga el envenenamiento de DNS."
  },
  {
    "q": "¿Qué tipo de compresión garantiza que los datos se puedan reconstruir exactamente como eran originalmente?",
    "options": [
      "Compresión con pérdida",
      "Compresión sin pérdida",
      "Codificación UTF-8",
      "Codificación Huffman"
    ],
    "answer": 1,
    "explanation": "La compresión sin pérdida (lossless) permite reconstruir el dato original byte a byte. La compresión con pérdida descarta información; UTF-8 es codificación y Huffman es un algoritmo, no un 'tipo'."
  },
  {
    "q": "¿Cuál es el objetivo principal de los ataques XSS (Cross-site Scripting)?",
    "options": [
      "Denegar el servicio al servidor",
      "Sobrescribir archivos del sistema",
      "Eliminar usuarios del sistema",
      "Inyectar código JavaScript malicioso"
    ],
    "answer": 3,
    "explanation": "XSS consiste en inyectar JavaScript malicioso en un sitio para que se ejecute en el navegador de las víctimas, permitiendo robar cookies/credenciales o manipular la página."
  },
  {
    "q": "¿Qué acción evita un ataque de fijación de sesión?",
    "options": [
      "Usar cookies sin cifrado",
      "Permitir IDs en la URL",
      "Mostrar mensajes de error específicos",
      "No aceptar IDs de sesión enviados por el cliente"
    ],
    "answer": 3,
    "explanation": "En la fijación de sesión el atacante fuerza un ID de sesión conocido. La defensa es no aceptar IDs provistos por el cliente y regenerar el identificador tras un login exitoso."
  }
];

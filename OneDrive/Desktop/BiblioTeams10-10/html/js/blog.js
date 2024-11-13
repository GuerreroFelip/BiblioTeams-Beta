const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
const urlTodo = 'https://jsonplaceholder.typicode.com/todos/1';

async function fetchData(api) {
    const response = await fetch(api);
    if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.status);
    }
    const data = await response.json();
    return data;
}
// Obtener y mostrar el todo
fetchData(urlPosts)
    .then(data => {
        const container = document.getElementById('posts-container');
        
        for (let i = 0; i < 5; i++) {
            const post = document.createElement('div');
            post.classList.add('post');

            // Modificando el contenido
            post.innerHTML = `
                <h2>¡Publicación Personalizada #1! </h2>
                <p>Contenido original: ${data[i].body}</p>
                <p>Publicado por: Usuario ${data[i].userId}</p>
            `;
            container.appendChild(post);
        }
    })
    .catch(error => console.error('Error al obtener las publicaciones:', error));


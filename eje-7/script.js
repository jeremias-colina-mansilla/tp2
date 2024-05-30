async function ExtraerDatos(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const personas =await res.json()
    const contenedor = $('contenedor')
    personas.forEach(persona => {
        const item = document.createElement('div')
        item.id = persona.id
        item.classList.add('persona')
        const verTareas = document.createElement('button')
        const ocultarTareas = document.createElement('button')
        verTareas.innerText = "Ver tareas"
        ocultarTareas.innerText = "Ocultar tareas"
        ocultarTareas.disabled = true
        verTareas.addEventListener("click", async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${persona.id}`);
            const tareas =await res.json()
            tareas.forEach(tareaElemento =>{
                const tarea = document.createElement('p')
                tarea.innerText = `Tarea ${tareaElemento.id} : ` + tareaElemento.title
                if(tareaElemento.completed){
                    tarea.style.color = "green"
                }
                else{
                    tarea.style.color = 'red'
                }
                item.appendChild(tarea)
                verTareas.disabled = true
                ocultarTareas.disabled = false
                ocultarTareas.addEventListener("click", async () => {
                    tarea.innerText = ""
                verTareas.disabled = true
                verTareas.disabled = false
                })
            })
        })
        item.innerHTML = ` <p class="id">Id :${persona.id}</p>
        <p class="nombre">Nombre: ${persona.name}</p>
        <p class="usuario">Usuario: ${persona.username}</p>
        <p class="email">Email: ${persona.email}</p>
        <p class="sitio">Sitio: ${persona.website}</p>
        `
        item.appendChild(verTareas)
        item.appendChild(ocultarTareas)
        contenedor.appendChild(item)
    });
    }
    ExtraerDatos()
    
    
    function $(elemento){
        return document.getElementById(elemento)
    }
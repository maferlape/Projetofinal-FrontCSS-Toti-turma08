//Acceso da Api

fetch(`https://api.github.com/users/maferlape/repos`)
.then(resp => resp.json())
.then(datos => {
    datos.forEach(dato =>{createlinha(dato, "body-table")
    })
})


function createlinha(dato, id){
    const body = document.querySelector(`#${id}`)
    const linha = document.createElement('tr')
    const nome = document.createElement('td')
    const repositorio = document.createElement('td')

    const link = document.createElement('a')
    link.href = dato.svn_url
    link.textContent = dato.svn_url

    repositorio.appendChild(link)
    
    nome.textContent = dato.name
    // repositorio.textContent = dato.svn_url
    
    linha.appendChild(nome)
    linha.appendChild(repositorio)
    
    return body.append(linha)
}
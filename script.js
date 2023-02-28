//  url = 'https://api.unsplash.com/photos/?client_id=CvKayZdo44-Cjv3YZH9oFopM-HhyT8go42Hkc2BVKLc&page=1'

var page = 1

var form_check = document.querySelector('.search')
form_check.addEventListener('submit',(e)=>{
    e.preventDefault()
    var parent = document.querySelector('.parent')
    parent.innerHTML = ''
    var search = document.querySelector('[placeholder="Enter the value"]')
    var search_value = search.value
    api(page,search_value)

})


// var data = 'nature'
async function api(page_value,data){
    url = `https://api.unsplash.com/search/photos?client_id=M4Dy5kUDIAO2Rz5pEYkw5WasDJ74YGeOfMasp0X8iTc&query=${data}&per_page=20&page=${page_value}&orientation=squarish`
    console.log(url);
    v = fetch(url)
    try{
        out1 = await v       // response
        prom = out1.json()   // promise
        out11 = await prom
        console.log(out11.results);
        var parent = document.querySelector('.parent')
    
        if((out11.results.length==0)){
            parent.innerText="NO DATA FOUND";
            parent.style.color="black";
        }else{
        for (let i of out11.results){
            if(i.urls.thumb){
                var image_ele = document.createElement('img')
                image_ele.setAttribute('src',i.urls.thumb)
                console.log();
                parent.append(image_ele)
            }
            
        }
    }
    }catch{
        console.log('there is an error');
        console.log(url);
    }
    

    
}

// function for scroll event
window.addEventListener('scroll',()=>{
    if((window.scrollY + window.innerHeight +200)> document.querySelector('body').offsetHeight){// to know the height of the screen and compare with our document height and increase scroll
        page++ // if scroll reaches a certain height increment the page
        var search = document.querySelector('[placeholder="Enter the value"]')
        var search_value = search.value
        api(page,search_value)
        // console.log(page);
        
    }
    
})



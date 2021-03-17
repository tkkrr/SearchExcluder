const search_result = document.querySelectorAll(".g")

// exclude items from search list
Array.from(search_result).forEach( async (item) => {
    const sample = item.querySelector("a").href
    const basename = sample.slice(sample.search(/\/\/(.+)/)+2).split("/")[0]
    const {exclude} = await browser.storage.local.get()

    for(let i of exclude){
        if(basename.includes(i)){
            item.style = "display: none;"
        }
    }
})

// exclude Ads item
document.getElementById("taw").style = "display: none;"

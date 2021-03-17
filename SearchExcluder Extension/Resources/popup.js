window.addEventListener("DOMContentLoaded", async () => {
    const sample = document.querySelector("textarea.excludelist")
    const submitButton = document.querySelector("button.submit")
    
    // added exclude item
    submitButton.addEventListener("click", event => {
        const excludelist = sample.value.split("\n")
        browser.storage.local.set({
            exclude: excludelist
        })
        console.log("exclude list updated!")
    })
    
    // get exsisted exclude list
    const result = await browser.storage.local.get()
    if(!result) return
    sample.value = result.exclude.join("\n")
})


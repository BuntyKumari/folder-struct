const explorer = {
    name: "root",
    isFolder: true,
    items: [
        {
            name: "public",
            isFolder: true,
            items: [
                {
                    name: "public_nested_1",
                    isFolder:true,
                    items: [
                        {
                            name: "index.html",
                            isFolder: false
                        },
                        {
                            name: "hello.html",
                            isFolder: false
                        }
                    ]
                },
                {
                    name: "public_nested_2",
                    isFolder: false,
                }
            ]
        },
        {
            name: "src",
            isFolder: true,
            items: [
                {
                    name: "App.js",
                    isFolder:  false
                },
                {
                    name: "index.js",
                    isFolder: false
                },
                {
                    name: "styles.css",
                    isFolder: false
                },
            ]
        },
        {
            name:"package.json",
            isFolder:false
        }
    ]
}
export default explorer;
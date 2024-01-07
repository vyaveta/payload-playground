const invention = {
    name: "invention",
    title: "Inventions",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name"
            }
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            },
            fields:[
                {
                    name: "alt",
                title: "Alt",
                type: "string",
                }
            ]
        },
        {
            name: "url",
            title: "Url",
            type: "url"
        },
        {
            name: "content",
            titie: "Content",
            type: 'array',
            of: [{ type: "block" }],
        }
    ]
}

export default invention
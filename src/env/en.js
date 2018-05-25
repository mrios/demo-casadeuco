export default {
    appName: "Casa de Uco",
    navbar: {
        primary:  [
            {
                key: "primary1",
                name: "Resort",
                url: "resort",
                parent: false
            },
            {
                key: "primary2",
                name: "Bodegas",
                url: "bodegas",
                parent: false
            },
            {
                key: "primary3",
                name: "Viñedos Privados",
                url: "vinedos_privados",
                parent: false
            }
        ],
        secondary: [
            // primary 1
            {
                key: "secondary1",
                name: "Estadia y programas",
                url: "secondary1",
                parent: "primary1"
            },
            {
                key: "secondary2",
                name: "Actividades",
                url: "secondary2",
                parent: "primary1"
            },
            {
                key: "secondary3",
                name: "Cocina y Vinos",
                url: "secondary3",
                parent: "primary1"
            },
            {
                key: "secondary4",
                name: "Spa",
                url: "secondary4",
                parent: "primary1"
            },
            // primary 2
            {
                key: "secondary5",
                name: "Nuestra Historia",
                url: "secondary5",
                parent: "primary2"
            },
            {
                key: "secondary6",
                name: "Vinos y Premios",
                url: "secondary6",
                parent: "primary2"
            },
            {
                key: "secondary7",
                name: "Viñedos & Terroir (viñedos orgánicos)",
                url: "secondary7",
                parent: "primary2"
            },
            {
                key: "secondary8",
                name: "Spa",
                url: "Enoturismo",
                parent: "primary2"
            },
            // primary 3
            {
                key: "secondary9",
                name: "Viñedos Privados",
                url: "secondary5",
                parent: "primary3"
            },
            {
                key: "secondary10",
                name: "Miembros",
                url: "secondary10",
                parent: "primary3"
            }
        ],
    },
    slides: [
        'home-1.jpg', 'home-2.jpg', 'home-6.jpg', 'home-8.jpg' 
    ],
    sections: [
        {
            name: "resort",
            slider: {
                slides: [
                    'resort-1.jpg', 'resort-8.jpg', 'resort-9.jpg' 
                ],
                position: 'left'
            },
            title: "Resort",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit velit et lorem maximus placerat. Nunc nec auctor diam. Vivamus finibus nulla tristique nunc viverra rutrum. Mauris pharetra molestie enim id elementum. Nullam congue dolor sit amet urna finibus scelerisque. Sed pretium posuere nulla ac faucibus. Vestibulum a placerat nisi. Donec interdum ex lectus, vel lobortis elit molestie tincidunt.",
            cta: {
                text: "Consultar Disponibilidad",
                url: "google.com"
            },
            virtualTour: [
                {
                    name:'exteriorescalera02',
                    placeholder:'http://www.casadeuco.com/images/360tours/exteriorescalera02.jpg'
                },
                {
                    name:'exteriorreservorio04',
                    placeholder:'http://www.casadeuco.com/images/360tours/exteriorreservorio04.jpg'
                },
                {
                    name:'salon03',
                    placeholder:'http://www.casadeuco.com/images/360tours/salon03.jpg'
                }
            ]
        },
        {
            name: "bodegas",
            slider: {
                slides: [
                    'resort-1.jpg', 'resort-8.jpg', 'resort-9.jpg' 
                ],
                position: 'right'
            },
            title: "Bodegas",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit velit et lorem maximus placerat. Nunc nec auctor diam. Vivamus finibus nulla tristique nunc viverra rutrum. Mauris pharetra molestie enim id elementum. Nullam congue dolor sit amet urna finibus scelerisque. Sed pretium posuere nulla ac faucibus. Vestibulum a placerat nisi. Donec interdum ex lectus, vel lobortis elit molestie tincidunt.",
            cta: {
                text: "Consultar Disponibilidad",
                url: "google.com"
            },
            virtualTour: [
                {
                    name:'exteriorescalera02',
                    placeholder:'http://www.casadeuco.com/images/360tours/exteriorescalera02.jpg'
                },
                {
                    name:'exteriorreservorio04',
                    placeholder:'http://www.casadeuco.com/images/360tours/exteriorreservorio04.jpg'
                },
                {
                    name:'salon03',
                    placeholder:'http://www.casadeuco.com/images/360tours/salon03.jpg'
                }
            ]
            
        },
        {
            name: "vinedos_privados",
            slider: {
                slides: [
                    'resort-1.jpg', 'resort-8.jpg', 'resort-9.jpg' 
                ],
                position: 'left'
            },
            title: "Viñedos Privados",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit velit et lorem maximus placerat. Nunc nec auctor diam. Vivamus finibus nulla tristique nunc viverra rutrum. Mauris pharetra molestie enim id elementum. Nullam congue dolor sit amet urna finibus scelerisque. Sed pretium posuere nulla ac faucibus. Vestibulum a placerat nisi. Donec interdum ex lectus, vel lobortis elit molestie tincidunt.",
            cta: {
                text: "Consultar Disponibilidad",
                url: "google.com"
            },
            virtualTour: [
                {
                    name:'exteriorescalera02',
                    placeholder:'http://www.casadeuco.com/images/360tours/exteriorescalera02.jpg'
                },
                {
                    name:'exteriorreservorio04',
                    placeholder:'http://www.casadeuco.com/images/360tours/exteriorreservorio04.jpg'
                },
                {
                    name:'salon03',
                    placeholder:'http://www.casadeuco.com/images/360tours/salon03.jpg'
                }
            ]
        }
    ]
    // sections: {
    //     home: {
    //         title: "",
    //         subtitle: ""
    //     },
    //     products: {
    //         title: "How we can help you?",
    //         subtitle: "",
    //         services: [
    //             [
    //                 {title: "Digital Strategy", icon: "rocket"},
    //                 {title: "Business Intelligence & Big Data", icon: "dot-chart"},
    //                 {title: "Customer Experience", icon: "customer-service"}
    //             ],
    //             [
    //                 {title: "Velocity Development: ", icon: "sync"},
    //                 {title: "Cloud & Serverless paradigm", icon: "cloud"},
    //                 {title: "Mobile & IoT integrations", icon: "shake"}
    //             ],
    //             [
    //                 {title: "IT Automation", icon: "tool"},
    //                 {title: "Sysadmin/Devops/Developers", icon: "code"},
    //                 {title: "Data Scientist/Business Intelligence on Demand?", icon: "share-alt"}
    //             ]
    //         ],
    //     },
    //     about: {
    //         title: "The Team",
    //         subtitle: "We are experts and we love our job",
    //         members: [
    //             {
    //                 fullname: "Gabriel",
    //                 profile_image: "",
    //                 social_nets: [
    //                     {
    //                         name: "linkedin",
    //                         icon: "",
    //                         path: ""
    //                     }
    //                 ]
    //             },
    //             {
    //                 fullname: "Juan Pablo Gonzalez",
    //                 profile_image: "",
    //                 social_nets: [
    //                     {
    //                         name: "linkedin",
    //                         icon: "",
    //                         path: ""
    //                     }
    //                 ]
    //             },
    //             {
    //                 fullname: "Matias Rios",
    //                 profile_image: "",
    //                 social_nets: [
    //                     {
    //                         name: "linkedin",
    //                         icon: "",
    //                         path: ""
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     partners: {
    //         title: "Technologies in our stack",
    //         items: [
    //             {
    //                 group: "Big data",
    //                 items: [
    //                     {title: "Hadoop", icon:"", path: ""},
    //                     {title: "MongoDB", icon:"", path: ""},
    //                     {title: "Redis", icon:"", path: ""},
    //                     {title: "Memcached", icon:"", path: ""}
    //                 ]
    //             },
    //             {
    //                 group: "Software Development",
    //                 items: [
    //                     {title: "Javascript", icon:"", path: ""},
    //                     {title: "NodeJS", icon:"", path: ""},
    //                     {title: "ReactJS", icon:"", path: ""},
    //                     {title: "Redux", icon:"", path: ""},
    //                     {title: "Relay", icon:"", path: ""},
    //                     {title: "NextJS", icon:"", path: ""},
    //                     {title: "Electron", icon:"", path: ""}
    //                 ]
    //             },
    //             {
    //                 group: "Cloud Computing",
    //                 items: [
    //                     {title: "Google Cloud", icon:"", path: ""},
    //                     {title: "AWS", icon:"", path: ""}
    //                 ]
    //             }
    //         ]
    //     },
    //     social: {
    //         title: "Stay in touch",
    //         items: [
    //             {title: "Linkedin", icon: "rocket", url: ""}
    //         ]
    //     }
    // },
}
const initState = {
    projects: [
        {
            id: 1, 
            title: "React js is fun",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto hic ipsa minus recusandae enim. Ipsa similique voluptatibus officiis labore ut laborum, sapiente rerum est explicabo animi quisquam eius nam perspiciatis!",
            firstName: "ulfa",
            lastName: "hasanah",
            date: new Date().toDateString(),
            isFav: false,
            totalFavorites: 0
        },
        {
            id: 2, 
            title: "Play with ulfa", 
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto hic ipsa minus recusandae enim. Ipsa similique voluptatibus officiis labore ut laborum, sapiente rerum est explicabo animi quisquam eius nam perspiciatis!",
            firstName: "ulfa",
            lastName: "hasanah",
            date: new Date().toDateString(),
            isFav: true,
            totalFavorites: 3
        },
        {
            id: 3, 
            title: "Javascript is easy to learn", 
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto hic ipsa minus recusandae enim. Ipsa similique voluptatibus officiis labore ut laborum, sapiente rerum est explicabo animi quisquam eius nam perspiciatis!",
            firstName: "ulfa",
            lastName: "hasanah",
            date: new Date().toDateString(),
            isFav: false,
            totalFavorites: 0
        }
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            return {
                ...state,
                projects: [...state.projects, action.project ]
            };
        case 'DELETE_PROJECT':
            return {
                ...state,
                projects: state.projects.filter(el => el.id !== action.id)
            };
        case 'ADD_FAVORITE':
            return {
                ...state,
                projects: state.projects.map(product => {
                    if (product.id === action.id) {
                      return {...product, isFav: true, totalFavorites: product.totalFavorites + 1}
                    };
                    return product;
                  })
            }
        case 'DELETE_FAVORITE':
        return {
            ...state,
                projects: state.projects.map(product => {
                    if (product.id === action.id) {
                      return {...product, isFav: false, totalFavorites: product.totalFavorites - 1}
                    };
                    return product;
                })
        }
        default:
            return state
    }
}

export default projectReducer
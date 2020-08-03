'use strict'

const Courses=[
    {
        _id: 'uno',
        title: 'Mi Titulo',
        teacher: 'El profesor',
        description: 'Una descripcion',
        topic: 'Programación'
    },{
        _id: 'dos',
        title: 'Mi Titulo 2',
        teacher: 'El profesor',
        description: 'Una descripcion',
        topic: 'Programación'
    },
    {
        _id: 'tres',
        title: 'Mi Titulo 3',
        teacher: 'El profesor',
        description: 'Una descripcion',
        topic: 'Programación'
    }
]

module.exports={
    Query:{
    getCourses: () => {
    return Courses;
    },
    getCourse:(root,args)=>{
        console.log({root});
        const curso=Courses.filter(item=>item._id===args.id);
        return curso.pop();
    }
}
}
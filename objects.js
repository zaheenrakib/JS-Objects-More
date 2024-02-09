const nayok = {
    name : 'Shakib Khan',
    id :121,
    address:'Movie cinema',
    IsSingle:true,
    friends:['Apu','Raaz','Salman','Amir'],
    movies : [{name:'no.1',year:2015 } , {name:'king Khan',vear:2018}],
    act:function(){
        console.log('Acting like Shakib khan')
    },
    car:{
        brand:'tesla',
        price:500000,
        made:2025,
        manufacturer:{
            name:'tesla',
            ceo:'Elon Mask',
            Country:'USA'
        }

    }

}
console.log(nayok);
nayok.act();
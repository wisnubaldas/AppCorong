function Baldas() {
    let root = {}
    root.widget = function()
    {
        return [
            {
                bg:'bg-blue',
                icon:'fa fa-globe fa-fw',
                title:'Torent 1',
                debit:12312312312,
                ph:'80%',
                desc:'Peningkatan Ph Air dari 200'
            },
            {
                bg:'bg-purple',
                icon:'fa fa-globe fa-fw',
                title:'Torent 1',
                debit:12312312312,
                ph:'80%',
                desc:'Peningkatan Ph Air dari 200'
            },
            {
                bg:'bg-green',
                icon:'fa fa-globe fa-fw',
                title:'Torent 1',
                debit:12312312312,
                ph:'80%',
                desc:'Peningkatan Ph Air dari 200'
            },
            {
                bg:'col-md-6',
                icon:'fa fa-globe fa-fw',
                title:'Torent 1',
                debit:12312312312,
                ph:'80%',
                desc:'Peningkatan Ph Air dari 200'
            },
        ]
    }
    root.pulse = function()
    {
        let x = (Math.random() * (0.120 - 3.0200) + 5.0200).toFixed(3)
        let y = (Math.random() * (0.300 - 3.0200) + 5.0200).toFixed(3)
        let z = (Math.random() * (0.200 - 3.0200) + 5.0200).toFixed(3)
        let a = (Math.random() * (0.120 - 3.0200) + 5.0200).toFixed(3)
        $('#tabung2').html(y+' Ph');
        $('#tabung3').html(z+' Ph');
        $('#tabung4').html(a+' Ph');
    }
    root.getNum = function()
    {
        setInterval(function(){
            root.pulse()
        }, 5000);
    }
    return root;
}

const app = new Baldas()

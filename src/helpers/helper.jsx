export const revisarPresupuesto = (presupuesto, restante) => {
    let clase = 'alert ';

    if( (presupuesto / 4) > restante) {
        clase += 'alert-danger';
    } else if ( (presupuesto / 2 > restante ) ) {
        clase += 'alert-warning';
    } else {
        clase += 'alert-success';
    }

    return clase;
}
import { Card } from './design-components/Card';

export default function References() {
    return (
        <>
            <h2 class="headline">Referenzen</h2>
            <div class="card-bg-responsive bg-white">
                <Card
                    className="{this.props.image ? 'hidden' : ' block'}"
                    title="MoCCA"
                    content="
                Modular Car Computing Architecture ist ein C++ Framework, das 
                in der Automobilindustrie zur Entwicklung von hoch skalierbaren 
                Entertainment- und Informationssystemen eingesetzt wird.
                " />
                <Card
                    title="PiezoLith3000Plus"
                    content="
                Der PiezoLith 3000 ist ein medizinisches Therapiesystem zur extra-korporalen Stoßwellen Lithotripsie (ESWL). Er erlaubt die Zertrümmerung von z. B. Nieren-, Blasen- u. Gallen¬steinen ohne 
operativen Eingriff in den Körper. 
                " />
            </div>
        </>
    );

}
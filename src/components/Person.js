import { TopicHeadline } from './design-components/TopicHeadline'
import { TextContainer } from './design-components/TextContainer'

export default function Person() {
    return (
        <>
            <TopicHeadline headline="Über mich" bgColor="" textColor="text-darkblue1" />

            <div className="card-bg-responsive">
                <div className="spacing-content person-container">
                    <img className="person-img" src="http://placeimg.com/500/500/arch"></img>

                    <TextContainer component="person" title="Hallo, ich bin Rüdiger Bayer" subtitle="Es freut mich Sie kennenzulernen" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est.<br /> <br />
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                            ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                            sit amet"/>



                </div>
            </div>
        </>
    );

}
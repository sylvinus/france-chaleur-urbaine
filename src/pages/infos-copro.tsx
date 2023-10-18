import Head from 'next/head';
import Advantages from '@components/Coproprietaire/Advantages';
import Interviews from '@components/Coproprietaire/Interviews';
import HeadSliceForm from '@components/HeadSliceForm';
import MainContainer from '@components/shared/layout';
import { GlobalStyle } from '@components/shared/layout/Global.style';
import Slice from '@components/Slice';
import SliceForm from '@components/SliceForm';
import WrappedBlock from '@components/WrappedBlock';
import WrappedText from '@components/WrappedText';
import { comparatifRcu } from '@data/coproprietaire';

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Un réseau de chaleur est un système de distribution de chaleur produite de façon centralisée qui permet de desservir un grand nombre d’usagers (bâtiments tertiaires publics ou privés, copropriétés, logements sociaux,...). Un des atouts majeurs des réseaux de chaleur est de permettre de mobiliser les énergies renouvelables présentes sur le territoire, difficilement distribuables autrement."
        />
        <title>
          France Chaleur Urbaine : Une solution numérique qui facilite le
          raccordement à un chauffage économique et écologique
        </title>
      </Head>

      <MainContainer currentMenu={'/landing'}>
        <div>
          <GlobalStyle />
          <HeadSliceForm
            bg="/img/banner_infos-copro.png"
            pageBody={`
Copropriétaires, faites des économies
# Avec le chauffage urbain, réduisez vos factures de chauffage jusqu’à 40%`}
            formLabel="Vérifiez immédiatement si votre immeuble pourrait être raccordé !"
            checkEligibility
            needGradient
          />
          <Slice padding={8} theme="grey">
            <Interviews from="florence" />
          </Slice>
          <Slice padding={8}>
            <Advantages />
          </Slice>
          <Slice
            padding={8}
            theme="grey"
            className="slice-comparatif-rcu"
            header={`### La solution de chauffage la plus compétitive`}
          >
            <WrappedBlock data={comparatifRcu} reverse />
          </Slice>
          <Slice padding={8}>
            <WrappedText
              center
              body={`
Un réseau de chaleur est constitué d’un système de **canalisations** qui permettent d’acheminer vers un ensemble de **bâtiments** de la **chaleur** produite **localement**, avec des **sources d’énergies renouvelables ou de récupération**  (géothermie, biomasse, chaleur issue de l'incinération des déchets...). 

Une alternative écologique au fioul et au gaz !`}
              imgSrc="/img/rcu-illustation.svg"
            />
          </Slice>
          <Slice theme="blue-background" padding={5}>
            <SliceForm
              title="Votre copropriété pourrait-elle être raccordée à un réseau de chaleur ?"
              colored
            />
          </Slice>
        </div>
      </MainContainer>
    </>
  );
}

import Header from './../../components/Header/Header'
import Default from './default/default'
import dummy from '../api/dummy'

function Index({ dummy }) {
  return (
    <>{dummy.template === 'default' ? <Default data={dummy} /> : ''}
    </>
  )
}

export const getServerSideProps = async () => {
  // Pass data to the page via props
  return { props: { dummy } }
}

export default Index
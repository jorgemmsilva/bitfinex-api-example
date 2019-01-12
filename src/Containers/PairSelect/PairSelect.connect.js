import { connect } from 'react-redux'
import PairSelect from './PairSelect'
import { changeSelectedPair } from '../../Store/pairs/actions'
import { getSelectedPair } from '../../Store/pairs/selectors'

export const mapState = state => ({
  selectedPair: getSelectedPair(state),
})


const mapDispatchToProps = {
  changeSelectedPair,
}
export default connect(mapState, mapDispatchToProps)(PairSelect)

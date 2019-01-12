import { connect } from 'react-redux'
import { changeSelectedPair } from '../../Store/pairs/actions'
import { getSelectedPair } from '../../Store/pairs/selectors'
import PairSelect from './PairSelect'

export const mapState = state => ({
  selectedPair: getSelectedPair(state),
})


const mapDispatchToProps = {
  changeSelectedPair,
}
export default connect(mapState, mapDispatchToProps)(PairSelect)

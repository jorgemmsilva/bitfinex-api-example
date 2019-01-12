import React from 'react'
import PropTypes from 'prop-types'
import { Select } from './styled'

const availablePairs = [
  'BTCUSD', 'LTCUSD', 'LTCBTC', 'ETHUSD', 'ETHBTC', 'ETCBTC', 'ETCUSD', 'RRTUSD', 'RRTBTC', 'ZECUSD', 'ZECBTC', 'XMRUSD', 'XMRBTC', 'DSHUSD', 'DSHBTC', 'BTCEUR', 'XRPUSD', 'XRPBTC', 'IOTUSD', 'IOTBTC', 'IOTETH', 'EOSUSD', 'EOSBTC', 'EOSETH', 'SANUSD', 'SANBTC', 'SANETH', 'OMGUSD', 'OMGBTC', 'OMGETH', 'BCHUSD', 'BCHBTC', 'BCHETH', 'NEOUSD', 'NEOBTC', 'NEOETH', 'ETPUSD', 'ETPBTC', 'ETPETH', 'QTMUSD', 'QTMBTC', 'QTMETH', 'AVTUSD', 'AVTBTC', 'AVTETH', 'EDOUSD', 'EDOBTC', 'EDOETH', 'BTGUSD', 'BTGBTC', 'DATUSD', 'DATBTC', 'DATETH', 'QSHUSD', 'QSHBTC', 'QSHETH', 'YYWUSD', 'YYWBTC', 'YYWETH', 'GNTUSD', 'GNTBTC', 'GNTETH', 'SNTUSD', 'SNTBTC', 'SNTETH', 'IOTEUR', 'BATUSD', 'BATBTC', 'BATETH', 'MNAUSD', 'MNABTC', 'MNAETH', 'FUNUSD', 'FUNBTC', 'FUNETH', 'ZRXUSD', 'ZRXBTC', 'ZRXETH', 'TNBUSD', 'TNBBTC', 'TNBETH', 'SPKUSD', 'SPKBTC', 'SPKETH', 'TRXUSD', 'TRXBTC', 'TRXETH', 'RCNUSD', 'RCNBTC', 'RCNETH', 'RLCUSD', 'RLCBTC', 'RLCETH', 'AIDUSD', 'AIDBTC', 'AIDETH', 'SNGUSD', 'SNGBTC', 'SNGETH', 'REPUSD', 'REPBTC', 'REPETH', 'ELFUSD', 'ELFBTC', 'ELFETH',
]

const PairSelect = ({ selectedPair, changeSelectedPair }) => (
  <Select
    options={availablePairs.map(pair => ({ label: pair, value: pair }))}
    value={selectedPair}
    onChange={changeSelectedPair}
    isLoading={false}
  />
)

PairSelect.propTypes = {
  selectedPair: PropTypes.string.isRequired,
  changeSelectedPair: PropTypes.func.isRequired,
}

export default PairSelect

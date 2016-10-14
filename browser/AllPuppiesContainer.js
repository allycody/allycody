import {connect} from 'react-redux';
import AllPuppies from './AllPuppies';
import {getPuppies} from './action-creators';

const hardCodedData = [
  { id: 1, name: 'Cody' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Bubba' }
];

const mapStateToProps = ({allPuppies}) => ({
	allPuppies
})

export default connect(
	mapStateToProps
)(AllPuppies)
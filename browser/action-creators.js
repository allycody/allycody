export const GET_PUPPIES = 'GET_PUPPIES';
export const GET_PUPPY = 'GET_PUPPY';



export const setPuppies = (puppies) => ({
	type: GET_PUPPIES, 
	allPuppies : puppies
})

export const getPuppies = () => 
	dispatch => 
		fetch('/api/puppies')
		.then(res => res.json())
		.then(puppies => {
			dispatch(setPuppies(puppies))
		})
		.catch(function (err) {
			console.error(err)
		})

export const setPuppy = (puppy) => ({
	type: GET_PUPPY, 
	selectedPuppy : puppy
})

export const getPuppy = (puppyId) => 
	dispatch => 
		fetch(`/api/puppies/${puppyId}`)
		.then(res => res.json())
		.then(puppy => {
			dispatch(setPuppy(puppy))
		})
		.catch(function (err) {
			console.error(err)
		})

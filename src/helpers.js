export function getComponentName(object) {
	const objectComponentMap = {
		'films' : 'Film',
		'locations' : 'Location',
		'people' : 'Person',
		'species' : 'Species',
		'vehicles' : 'Vehicles'
	};

	if ( ! objectComponentMap.hasOwnProperty( object ) ) {
		return null;
	}

	return objectComponentMap[object];
};

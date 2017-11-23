global.centers = [{
    centerId: 1,
    name: 'Diamonds Event Center',
    description: 'Book reception halls, venues for your wedding reception parties e.t.c. Book Marquee, conference centers, party halls, meeting rooms, convention centers and various types of event centers.',
    location: 'Victoria Island',
    capacity: 400,
    venueType: 'Hall',
    facilities: 'Power supply, Air Conditioning, parking'
},
{
    centerId: 2,
    name: 'Glitzs Event Center',
    description: 'Book reception halls, venues for your wedding reception parties e.t.c. Book Marquee, conference centers, party halls, meeting rooms, convention centers and various types of event centers.',
    location: 'Ikoyi',
    capacity: 1000,
    venueType: 'Conference Center',
    facilities: 'Power supply, Air Conditioning'
}]


class Center {

    addCenter(req, res) {
        const { id, name, description, location, capacity, venueType, facilities } = req.body;

        if (!name) {
            res.status(400).send({
                message: 'Please Add Name Of The Center!'
            })
        } else if (!description) {
            res.status(400).send({
                message: 'Field Cannot Be Empty!'
            })
        } else if (!location) {
            res.status(400).send({
                message: 'Please Select location Of Event Center'
            })
        } else if (!capacity) {
            res.status(400).send({
                message: 'Please Select Capacity'
            })
        } else if (!venueType) {
            res.status(400).send({
                message: 'Please Select Venue Type'
            })
        }
        else if (!facilities) {
            res.status(400).send({
                message: 'Please List Available Facilities'
            })
        } else {
            global.centers.push(req.body);

            return res.status(201).send({
                message: 'Successful',
                event: global.centers,
                error: false

            });

        }
    }

}
const centerController = new Center()

export default centerController;
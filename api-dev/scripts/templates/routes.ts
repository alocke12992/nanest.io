

import * as NameController from './controllers/Name'
router.get('/api/v1/Name', NameController.get)
router.put('/api/v1/Name/:id', NameController.put)
router.delete('/api/v1/Name/:id', NameController.deleteName)
router.post('/api/v1/Name', NameController.post)
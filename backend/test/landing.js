import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Show index page', async (t) => {
  t.plan(1)

  const res = await request(app).get('/')
  t.is(res.status, 200)
})

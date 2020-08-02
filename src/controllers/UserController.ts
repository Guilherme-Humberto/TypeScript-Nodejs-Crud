import { Request, Response } from 'express'
import User from '../database/Schemas/index'

class UserController {
  public async createUser (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)
    return res.json(user)
  }

  public async showUser (req: Request, res: Response): Promise<Response> {
    const users = await User.find()
    return res.json(users)
  }

  public async getUserById (req: Request, res: Response): Promise<Response> {
    const user = await User.findById(req.params.id)
    return res.json(user)
  }

  public async updateUser (req: Request, res: Response): Promise<Response> {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.json(user)
  }

  public async deleteUser (req: Request, res: Response): Promise<Response> {
    await User.findByIdAndRemove(req.params.id)
    return res.send({ message: 'Usuario apagado' })
  }
}

export default new UserController()

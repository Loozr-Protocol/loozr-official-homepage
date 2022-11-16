import { Model } from '../types';
import User from './user';

export interface NotificationJsonProps {
  id: number;
  created_at: string;
  message: string;
  read_receipt: string;
  reason: string;
}

export interface NotificationProps {
  id?: number;
  createdAt?: string;
  message?: string;
  readReceipt?: string;
  reason?: string;
  sender?: User
}

export default class Notification implements Model {
  id: number;
  createdAt: string;
  message: string;
  readReceipt: string;
  reason: string;
  sender: User;

  constructor({ id, createdAt, message, readReceipt, reason, sender }: NotificationProps) {
    this.id = id;
    this.createdAt = createdAt;
    this.message = message;
    this.readReceipt = readReceipt;
    this.reason = reason;
    this.sender = sender;
  }

  fromJson(jsonData: NotificationJsonProps) {
    this.id = jsonData['id'];
    this.createdAt = jsonData['created_at'];
    this.message = jsonData['message'];
    this.readReceipt = jsonData['read_receipt'];
    this.reason = jsonData['reason'];
    const sender = new User({});
    sender.fromJson(jsonData['sender']);
    this.sender = sender;
  }

  toJson() {
    const map = {
      'id': this.id,
      'created_at': this.createdAt,
      'message': this.message,
      'read_receipt': this.readReceipt,
      'reason': this.reason,
    }

    return map;
  }
}
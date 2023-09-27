export class Appointment
{
  id: number;
  doctor_id: number;
  doctor_name: string;
  person_id: number;
  person_name: string;
  fee: number;
  description:string;
  date:string
  time:number

  constructor()
  {
    this.id = -1;
    this.doctor_id = -1;
    this.doctor_name = '';
    this.person_id = -1;
    this.person_name = '';
    this.fee = -1;
    this.description = '';
    this.date = '';
    this.time = -1;
  }
}

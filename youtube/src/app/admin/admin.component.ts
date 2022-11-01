import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { CardsFacade } from '../core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent implements OnInit {
  public form: FormGroup;
  public title: AbstractControl;
  public description: AbstractControl;
  public img: AbstractControl;
  public video: AbstractControl;
  public date: AbstractControl;

  constructor(private fb: FormBuilder, private state: CardsFacade) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      title: this.fb.control(''),
      description: this.fb.control(''),
      img: this.fb.control(''),
      video: this.fb.control(''),
      date: this.fb.control(''),
    });

    this.title = this.form.get('title');
    this.description = this.form.get('description');
    this.img = this.form.get('img');
    this.video = this.form.get('video');
    this.date = this.form.get('date');
  }

  public onSubmit(): void {
    const card = {
      id: uuidv4(),
      snippet: {
        title: this.title.value,
        description: this.description.value,
        publishedAt: this.date.value,
        thumbnails: {
          default: { url: this.img.value },
        },
        liveBroadcastContent: this.video.value,
      },
    };

    this.state.addCard(card);
  }
}

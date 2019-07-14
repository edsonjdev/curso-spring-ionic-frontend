import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CidadeService } from '../../services/domain/cidades.service';
import { EstadoService } from '../../services/domain/estado.service';
import { EstadoDTO } from '../../models/estado.dto';
import { CidadeDTO } from '../../models/cidade.dto';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;
  estados: EstadoDTO[];
  cidades: CidadeDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public cidadeService: CidadeService,
    public estadoService: EstadoService
    ) {
      this.formGroup = this.formBuilder.group({
        nome: ['Maria Edna', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ['edna@gmail.com', [Validators.required, Validators.email]],
        tipo : ['1', [Validators.required]],
        cpfOuCnpj: ['71633645000100', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
        senha: ['123', [Validators.required]],
        logradouro : ['Rua Via', [Validators.required]],
        numero : ['25', [Validators.required]],
        complemento : ['Apt 3', []],
        bairro : ['Manga', []],
        cep: ['03412183083', [Validators.required]],
        telefone1 : ['843018718', [Validators.required]],
        telefone2 : ['', []],
        telefone3: ['', []],
        estadoId: [null, [Validators.required]],
        cidadeId: [null, [Validators.required]]
      });
    }

ionViewDidLoad(){
 this.estadoService.findAll()
  .subscribe(response => {
    this.estados = response;
    this.formGroup.controls.estadoId.setValue(this.estados[0].id);
    this.updateCidades();
  },
  error => {});
}

  signupUser() {
    console.log("enviou formulario.");
  }

  updateCidades() {
    let estado_id = this.formGroup.value.estadoId;
    this.cidadeService.findAll(estado_id)
      .subscribe(response => {
        this.cidades = response;
        this.formGroup.controls.cidadeId.setValue(null);
      },
      error => { });
  }

}

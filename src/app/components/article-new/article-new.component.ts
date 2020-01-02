import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {
  public article: Article;
  public status: string;
  public page_title: string;

  afuConfig = {
      multiple: false,
      formatsAllowed: ".jpg,.png, .gif, .jpeg",
      maxSize: "50",
      uploadAPI:  {
        url:Global.url + 'upload-image/'
      },
      theme: "attachPin",
      hideProgressBar: true,
      hideResetBtn: true,
      hideSelectBtn: false,
      replaceTexts: {
        selectFileBtn: 'Select Files',
        resetBtn: 'Reset',
        uploadBtn: 'Upload',
        dragNDropBox: 'Drag N Drop',
        attachPinBtn: 'Sube tu imagen para el articulo...',
        afterUploadMsg_success: 'Successfully Uploaded !',
        afterUploadMsg_error: 'Upload Failed !'
      }
  };

  constructor(
    private _articaleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article('','','',null,null);
    this.page_title = 'Crear artículo';
   }

  ngOnInit() {
  }

  onSubmit(form){
    this._articaleService.create(this.article).subscribe(
      response=>{
        if(response.status == 'success'){
          this.status = 'success';
          this.article = response.article;

          //Alerta
          swal(
            'Artículo creado',
            'El artículo se ha creado correctamente',
            'success'
          );

          this._router.navigate(['/blog']);
        }else{
          this.status = 'error';
        }
      },
      error=>{
        console.log(error);
        this.status = 'error';
      }
    );
  }
  //Subida de imagenes, este evento es un EventEmitter, por lo que se ejecuta cuando se selecciona la imagen
  //Y está definido dentro de la vista en el espacio de subir la imagen
  imageUpload(data){
    let image_data = JSON.parse(data.response);
    this.article.image = image_data.image;
  }

}

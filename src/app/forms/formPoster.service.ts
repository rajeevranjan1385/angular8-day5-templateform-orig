import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Iuser} from './forms.model';

@Injectable()

export class FormPosterService{
    httpUrl = "http://localhost:3100/postEmployee";
    constructor(private http: HttpClient){}

    saveFormData(employee): Observable<Iuser[]>{
        return this.http.post<Iuser[]>(this.httpUrl,employee);
    }
}
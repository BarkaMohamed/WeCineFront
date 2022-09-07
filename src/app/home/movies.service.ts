import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) {
  }

  getGenders(): Observable<any> {
    return this.httpClient.get('/movies/gender/list');
  }

  getBest(): Observable<any> {
    return this.httpClient.get('/movies/best')
  }

  getVideo(id: number): Observable<any> {
    return this.httpClient.get('/movies/videos/' + id)
  }

  getByGender(ids: number[]): Observable<any> {
    const params = new HttpParams({
      fromObject: {'id[]': ids}
    });
    return this.httpClient.get('/movies/by/gender', {params})
  }

  getByQuery(query: string): Observable<any> {
    return this.httpClient.get('/movies/search/' + query)
  }

  generateMovieVideoUrl(videoKey:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+videoKey);
  }
}

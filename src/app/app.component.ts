import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    { title: 'At the Beach', url: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' },
    { title: 'At the San', url: 'https://images.unsplash.com/photo-1682687220198-88e9bdea9931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8' },
    { title: 'At Toyko', url: 'https://images.unsplash.com/photo-1701762292610-3323efd62273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Nice Car', url: 'https://images.unsplash.com/photo-1701941258075-ae093a5f0185?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8' },
    { title: 'Nice View', url: 'https://images.unsplash.com/photo-1663947718652-fa32fb546da2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'I like Camping', url: 'https://images.unsplash.com/photo-1702012464361-b8e73df0802f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Just Walk Around', url: 'https://images.unsplash.com/photo-1702098121981-2c315d6b93fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'At the Beach', url: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' },
    { title: 'At the San', url: 'https://images.unsplash.com/photo-1682687220198-88e9bdea9931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8' },
    { title: 'At Toyko', url: 'https://images.unsplash.com/photo-1701762292610-3323efd62273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Nice Car', url: 'https://images.unsplash.com/photo-1701941258075-ae093a5f0185?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8' },
    { title: 'Nice View', url: 'https://images.unsplash.com/photo-1663947718652-fa32fb546da2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'I like Camping', url: 'https://images.unsplash.com/photo-1702012464361-b8e73df0802f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Just Walk Around', url: 'https://images.unsplash.com/photo-1702098121981-2c315d6b93fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'At the Beach', url: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' },
    { title: 'At the San', url: 'https://images.unsplash.com/photo-1682687220198-88e9bdea9931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8' },
    { title: 'At Toyko', url: 'https://images.unsplash.com/photo-1701762292610-3323efd62273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Nice Car', url: 'https://images.unsplash.com/photo-1701941258075-ae093a5f0185?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8' },
    { title: 'Nice View', url: 'https://images.unsplash.com/photo-1663947718652-fa32fb546da2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'I like Camping', url: 'https://images.unsplash.com/photo-1702012464361-b8e73df0802f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Just Walk Around', url: 'https://images.unsplash.com/photo-1702098121981-2c315d6b93fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'At the Beach', url: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' },
    { title: 'At the San', url: 'https://images.unsplash.com/photo-1682687220198-88e9bdea9931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8' },
    { title: 'At Toyko', url: 'https://images.unsplash.com/photo-1701762292610-3323efd62273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Nice Car', url: 'https://images.unsplash.com/photo-1701941258075-ae093a5f0185?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8' },
    { title: 'Nice View', url: 'https://images.unsplash.com/photo-1663947718652-fa32fb546da2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'I like Camping', url: 'https://images.unsplash.com/photo-1702012464361-b8e73df0802f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Just Walk Around', url: 'https://images.unsplash.com/photo-1702098121981-2c315d6b93fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'At the Beach', url: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' },
    { title: 'At the San', url: 'https://images.unsplash.com/photo-1682687220198-88e9bdea9931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8' },
    { title: 'At Toyko', url: 'https://images.unsplash.com/photo-1701762292610-3323efd62273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Nice Car', url: 'https://images.unsplash.com/photo-1701941258075-ae093a5f0185?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8' },
    { title: 'Nice View', url: 'https://images.unsplash.com/photo-1663947718652-fa32fb546da2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'I like Camping', url: 'https://images.unsplash.com/photo-1702012464361-b8e73df0802f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Just Walk Around', url: 'https://images.unsplash.com/photo-1702098121981-2c315d6b93fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  checkWindowIndex(index: number) {
    // console.log('current page: ', this.currentPage);
    // console.log('index: ', index);
    // console.log(Math.abs(this.currentPage - index));
    // console.log(Math.abs(this.currentPage - index) < 5);

    // return Math.abs(this.currentPage - index) < 5;


    const limit = 5;

    const lowerBound = Math.floor(this.currentPage / limit) * limit;
    const upperBound = lowerBound + limit;

    return lowerBound <= index && index < upperBound;
  }
}

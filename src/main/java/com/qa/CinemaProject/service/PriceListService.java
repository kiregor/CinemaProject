package com.qa.CinemaProject.service;

import java.io.File;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import com.qa.CinemaProject.entities.PriceList;

public class PriceListService {
	
	public static PriceList load() {
		
		PriceList temp = new PriceList();
		
		try { 
			File fXmlFile = new File("src\\main\\resources\\resources.xml");
			DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
			DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
			Document doc = dBuilder.parse(fXmlFile);
			
			doc.getDocumentElement().normalize();
			
			NodeList nList = doc.getElementsByTagName("prices");
			Node nNode = nList.item(0);
			
			if(nNode.getNodeType() == Node.ELEMENT_NODE) {
				Element eElement = (Element) nNode;
				
				temp.setAdultPrice(Integer.parseInt(eElement.getElementsByTagName("Adult").item(0).getTextContent()));
				temp.setChildPrice(Integer.parseInt(eElement.getElementsByTagName("Child").item(0).getTextContent()));
				temp.setConcessionsPrice(Integer.parseInt(eElement.getElementsByTagName("Concessions").item(0).getTextContent()));
			}
			
			
			
		}
		catch (Exception e) {
			temp.setAdultPrice(0);
			temp.setChildPrice(0);
			temp.setConcessionsPrice(0);
			e.printStackTrace();
		}
		
		return temp;
	}
}
